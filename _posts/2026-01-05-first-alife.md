---
layout: post
title: "Global Microbial Genetics"
date: 2026-01-05
author: "Jack James Willis"
categories: [research, ALIFE2026]
tags: [binary, optimization, experiments, MLP, genetic, evolution, microbe]
summary: "A first look at our ALIFE experimental domain, playing with some non-evolutionary parameters."
canonical: ""
draft: false
---

# Global Microbes

Today i'm showing a couple of figures taking a first look at optimizing binary weight networks for classification using a genetic approach. Here we are going to keep the genetic algorithm constant, but vary the network activation function and loss function.

But first, what is our genetic algorithm? For reasons I will go into in the next post on these experiments, I am particularly interested, and have implemented here, the microbial genetic algorithm. However, we are basterdizing it a bit by removing the geography from the algorithm, and evolving globally. What we expect is that global evolution tends to lead to suboptimal genomes, due to genes moving too quickly across the population.

Now let's go into the experiment details. We are using an MLP (2 inputs -> Linear 64 -> activation -> Linear 64 -> activation -> Linear 1 -> Sigmoid) to classify the two moons problem. Our training set contains 200 samples, 100 for each class, and the test set is 100 samples, 50 for each class, with 0.1 std gaussian noise added to the inputs. 

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sigmoid.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/acc_sigmoid.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/tanh.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/acc_tanh.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/relu.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/acc_relu.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sign.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/acc_sign.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>