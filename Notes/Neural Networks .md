# Neural Networks & Activation Functions Notes

## Machine Learning Intuition

Rules
↓
Model
↓
Guess
↓
Measure
↓
Adjust
↓
Repeat

Machine Learning in one sentence:

> Start with a guess, measure how wrong it is, adjust it, and repeat.

---

# Neural Network Training Pipeline

```text
Input
  ↓
Neural Network
  ↓
Prediction
  ↓
Compare with Real Value
  ↓
Loss Function
  ↓
Backward Propagation
  ↓
Optimizer
  ↓
Update Weights
  ↓
Repeat
```

---

# What is a Neuron?

A neuron receives inputs and produces an output.

```text
x1 --w1--> \
x2 --w2-->  Σ --> Activation --> Output
x3 --w3--> /
```

Where:

- x₁, x₂, x₃ = Inputs
- w₁, w₂, w₃ = Weights
- b = Bias
- Activation = Non-linearity

---

# Importance of Weights

Weights tell the model:

- This feature is important.
- This feature is not important.
- This feature matters more than another.

Example:

```text
Age        → Weight = High
Hair Color → Weight = Low
Income     → Weight = High
```

---

# Neuron Equation

```math
Output = Activation(Σ(wᵢxᵢ) + b)
```

or

```math
Output = Activation(wx + b)
```

---

# Forward Propagation

Forward propagation means:

```text
Input
 ↓
Weighted Sum
 ↓
Activation Function
 ↓
Output
```

The output becomes the input of the next layer.

---

# Loss Function

After prediction:

```text
Prediction
     +
Real Value
     ↓
Loss Function
```

Loss tells us:

> How wrong is the model?

Examples:

- MSE
- Cross Entropy

Higher Loss = Worse Prediction

Lower Loss = Better Prediction

---

# Backward Propagation

Once loss is calculated:

```text
Loss
 ↓
Backward Propagation
 ↓
Gradient Calculation
 ↓
Weight Updates
```

The network learns which weights caused the error.

---

# Why Activation Functions?

Without activation functions:

```text
Input
 ↓
Linear Layer
 ↓
Linear Layer
 ↓
Linear Layer
 ↓
Output
```

Every layer is linear.

---

# Linearity Problem

Suppose:

```math
y = w₁x + b₁
```

and

```math
z = w₂y + b₂
```

Substitute y:

```math
z = w₂(w₁x+b₁)+b₂
```

Expanding:

```math
z = (w₂w₁)x + (w₂b₁+b₂)
```

Let:

```math
w' = w₂w₁
```

and

```math
b' = w₂b₁+b₂
```

Then:

```math
z = w'x+b'
```

Still just one line.

---

# The Big Problem

Even if we stack:

- 10 layers
- 100 layers
- 1,000 layers
- 1,000,000 layers

the entire network collapses into:

```math
y = wx+b
```

A single linear transformation.

So the deep network gains no additional power.

---

# Why Non-Linearity Matters

Imagine red and blue points.

```text
🔴 🔵 🔴
🔵 🔴 🔵
🔴 🔵 🔴
```

A straight line cannot separate them.

We need curved boundaries.

---

# Activation Functions

Activation functions add bends.

Instead of:

```text
-----------
```

We get:

```text
~~~~~~~
```

These bends allow neural networks to learn complex patterns.

---

# Intuition

Without activation:

```text
Layer 1
 +
Layer 2
 +
Layer 3
 =
One Big Linear Layer
```

With activation:

```text
Layer
 ↓
Activation
 ↓
Layer
 ↓
Activation
 ↓
Layer
```

Each activation introduces a bend.

Many bends create complex decision boundaries.

---

# Result

```text
Linearity ❌
Cannot solve complex problems

Non-Linearity ✅
Can solve complex problems
```

---

# Historical Context

Neural networks existed in the 1970s.

However:

- Good activation functions were not common.
- Training techniques were weak.
- Computing power was limited.

As a result deep learning did not take off.

Modern activations and GPUs changed everything.

---

# Activation Function Menu

1. Sigmoid
2. Tanh
3. ReLU
4. GELU
5. Swish
6. Other modern variants

---

# Sigmoid

Maps values between:

```text
0 and 1
```

Formula:

```math
σ(x) = 1 / (1 + e^(-x))
```

Examples:

```text
Input = -9999 → 0
Input = 0     → 0.5
Input = 9999  → 1
```

Interpretation:

Acts like a probability.

---

# Tanh

Maps values between:

```text
-1 and 1
```

Formula:

```math
tanh(x)
```

Examples:

```text
Very Negative → -1
0             → 0
Very Positive → 1
```

Advantage:

Centered around zero.

---

# ReLU

Rectified Linear Unit

Formula:

```math
f(x)=max(0,x)
```

Graph:

```text
      /
     /
    /
---/
```

Behavior:

```text
x < 0 → 0
x ≥ 0 → x
```

Examples:

| Input | Output |
|---------|---------|
| -100 | 0 |
| -2 | 0 |
| 0 | 0 |
| 2 | 2 |
| 10000 | 10000 |

---

# Why ReLU?

For Sigmoid and Tanh:

Large values get compressed.

For ReLU:

Positive values remain untouched.

Benefits:

- Faster training
- Better gradients
- Less vanishing gradient problem

---

# Modern Variants

## GELU

Gaussian Error Linear Unit

Purpose:

- Makes the curve smoother than ReLU.
- Preserves useful information.
- Better performance in deep models.

Used in:

- BERT
- GPT
- Transformers
- Modern LLMs

---

## Swish

Another smooth activation.

Provides smoother gradient flow than ReLU.

Used in some modern architectures.

---

# Final Intuition

Neural Network:

```text
Input
 ↓
Weighted Sum
 ↓
Activation Function
 ↓
Output
```

Weights learn:

> What is important?

Activation Functions learn:

> How to bend the decision boundary?

Together they allow neural networks to model extremely complex real-world relationships.

---

# One-Line Summary

A neural network is a collection of weighted neurons, and activation functions introduce non-linearity so that the network can learn complex patterns instead of collapsing into a single straight-line equation.
