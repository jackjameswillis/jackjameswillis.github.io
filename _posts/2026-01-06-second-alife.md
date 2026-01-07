---
layout: post
title: "Global Microbial Genetics Ep. 2 Decision Boundaries Varying Quantization and Activation"
date: 2026-01-06
author: "Jack James Willis"
categories: [research, ALIFE2026]
tags: [ternery, optimization, experiments, MLP, genetic, evolution, microbe]
summary: "We're now going to look at the impact of introducing 0 into our parameters."
canonical: ""
draft: false
---

# Ternery Microbes

Another short one for today. Here we are going to investigate what happens when we allow weights to be zero. It seems, from the previous post, that sigmoid was the best activation function because it allowed for sparsity in the hidden layers. We're now going to question whether there is an impact in adding sparsity to the weights, and whether that alone substantially changes performance across activations. We will stick with BCE loss since it is clearly the better option from the previous post. All other parameters are the same.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sigmoid.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/tern_sigmoid.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/tanh.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/tern_tanh.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/relu.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/tern_relu.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sign.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/tern_sign.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

My intuition was that zero weights would allow us to use different activations other than sigmoid, but this appears to be wrong. Although the boundaries noticably change, for example with tanh, we aren't able to compete with sigmoid. From previous experiments with tanh, it helps to add a coefficient to the activation proportional to the inverse of the total number of inputs, which helps to keep hidden representations within the linear regime for longer, and allows for some neurons to converge around 0, but zero weights don't seem to assist substantially with this. The inspiration for this work, the Bayesian learning approach, allows for continuous biases in their network, when we have no biases. This likely has a substantial influence on the capacity of our model, which is more likely rectified by either somehow adding a bias, or introducing some normalization (i.e. batch norm, common in binary neural networks).