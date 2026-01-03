---
layout: post
title: "Two Moons, Binary Weight Neural Networks, and Evolution"
date: 2026-01-03
author: "Jack James Willis"
categories: [research, ALIFE2026]
tags: [evolution, genetic, microbe, binary, MLP]
summary: "Establishing results on binary weight MLP optimization for two moons classification"
canonical: ""
draft: false
---

# Introduction

Our initial step toward an ALIFE submission draws maximally on a trend amongst some of my favourite papers. Namely, that they start with demonstrations that are small, understandable, perhaps not groundbraking, nor proving the narrative in and of themselves, but justify further investigation. Admittedly, my approach thus far has been exactly the opposite, starting with SOTA MNIST classification isn't totally insane but it isn't efficient. Retractions in ambition since the start of 2025 lead me down to the approach taken in the first experiments on ADAM, where logistic regression on MNIST is the toy testbed (1). One of the fantastic properties of this problem is that the trained models are inherently interpretable, with weights that can be represented as images that reveal the learned features clearly. An approach that fails at this problem will, besides achieving high loss, be accompanied by weights that are visually without clear features.

A good toy problem doesn't demonstrate SOTA, but it permits the demonstration of some other feature of an approach. Shortest path problems like the traveling salesman problem can be used to demonstrate the power of simple distributed computational agents, such as in experiments on slime mold (2). This paper isn't trying to prove that we should replace modern computers with slime, but aims to illuminate the key features of simple behaviours that allow natural systems to avoid modern computational paradigms. There is an amazing efficiency about properties like shortest path finding in Physarum Polycephalum, something we can draw from and look for in the world around us, and to that extent the toy problem serves well.

# Two Moons

In this blog we are particularly interested in toy problems that allow us to demonstrate something about distributed computation. We need a toy problem that isn't trivial, preferably exposing approaches to nested optimization problems that are typically considered challenging from an evolutionary perspective. In this we look to a paper on the Bayesian learning rule for optimizing binary weight neural networks (3). This paper uses the two moons dataset as its toy, which is similar to an XOR problem.

XOR TRUTH TABLE
 | X | Y | Z |
 | 0 | 0 | 0 |
 | 0 | 1 | 1 |
 | 1 | 0 | 1 |
 | 1 | 1 | 0 |

XOR famously cannot be solved by a single neuron, a fact that supposedly started the AI winter. Two moons shares this fact, specifically that a straight line cannot seperate the two classes:

<div>
    {% include figure.liquid loading="eager" path="assets/img/classification_challenge.png" class="img-fluid rounded z-depth-1" %}
</div>

An S-shaped curve is optimal, which can only be achieved in neural computation by going deep. The Bayesian learning rule paper employs a two hidden layer MLP, each with 64 neurons, tanh activation, and binary weights to solve this problem.

# Binary Weight Neural Networks

But why binary weights? Generally speaking, binary weights are valuable because they simplify multiplication. First, I make the admittion every good binary boy makes. We aren't actually in binary, instead we only allow weights to take values -1 or 1. If we assume weights take on of these values, multiplication either flips the sign of the input or does nothing. This simplification of multiplication can improve runtime and memory (a weight can be stored in a single bit and projected to its sign value), but reduces how expressive neurons are. This trade-off means we tend to need more neurons to achieve performance similar to a floating point, high precision (i.e. more bits per weight) model, but not so many that speed and memory are worse (in theory... we will leave this to another blog).

It's not all good news though. There's a huge problem with networks with discrete weights like binary weight networks. They are non-differentiable, meaning they cannot be trained in the standard way. The literature on training recipes that allow discrete networks to be trained is part of a field called quantization-aware training, and essentially gives up on discrete weights during training. This field is extremely dense, and I will not go into it here, but the TLDR is that quantization-aware training is at least as expensive in speed and memory as training more expressive models, but does work, and produces substantially more efficient networks when training is over.

# Evolution in a Globally Connected World

There is a space of algorithms that can train a discrete model without disregarding the discrete part. It is called combinatorial optimization, and encapsulates a vast array of algorithms also known as 'good old fashioned AI'. One family of computational paradigms within this umbrella is the evolutionary paradigm, which has the superpower of being a distributed method. Like evolution by natural selection, where populations change over time through competition, reproduction, and heredity between individuals, evolutionary computation gives parts of the optimization process to different computers, allowing them to progress through time independently and simultaneously. This provides similar benefits to what GPUs provide for normal training methods, but importantly doesn't rely on analytic gradients. In other words, we can train our efficient binary weight network via evolution without resorting to the GPU, if we have many CPUs. Thankfully, CPUs are cheap to rent if you don't have a couple of thousand desktops lying around, but our toy problem is a nice size for simulating the evolutionary process on even a laptop.

An advantage to simulation is that we can freely manipulate the topology of the selective and reproductive network. What this means is that we can choose to spread our population out on a ball, on a grid, on a line, in a small world, or we can allow them all to compete and reproduce freely with one another. As a proof of principle, we take the latter approach for this blog, and optimize a population of 10 individuals for 1000 generations.

<div>
    {% include figure.liquid loading="eager" path="assets/img/full_analysis.png" class="img-fluid rounded z-depth-1" %}
</div>

# Concluding Remarks

Next step: Deep dive into evolutionary computation

# Bib

 - (1) Kingma, D.P., 2014. Adam: A method for stochastic optimization. arXiv preprint arXiv:1412.6980.
 - (2) Tero, A., Takagi, S., Saigusa, T., Ito, K., Bebber, D.P., Fricker, M.D., Yumiki, K., Kobayashi, R. and Nakagaki, T., 2010. Rules for biologically inspired adaptive network design. Science, 327(5964), pp.439-442.
 - (3) Meng, X., Bachmann, R. and Khan, M.E., 2020, November. Training binary neural networks using the bayesian learning rule. In International conference on machine learning (pp. 6852-6861). PMLR.
