# Neural Networks & Activation Functions

## Machine Learning Intuition

```text
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
```

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
x₁ --w₁--> \
x₂ --w₂-->  Σ --> Activation --> Output
x₃ --w₃--> /
```

Where:

* `x₁, x₂, x₃` = Inputs
* `w₁, w₂, w₃` = Weights
* `b` = Bias
* Activation = Non-linearity

---

# Importance of Weights

Weights tell the model:

* This feature is important.
* This feature is not important.
* This feature matters more than another.

Example:

```text
Age        → Weight = High
Hair Color → Weight = Low
Income     → Weight = High
```

---

# Neuron Equation

[
Output = Activation\left(\sum_i w_i x_i + b\right)
]

Simplified:

[
Output = Activation(wx+b)
]

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

* Mean Squared Error (MSE)
* Cross Entropy

```text
Higher Loss = Worse Prediction
Lower Loss  = Better Prediction
```

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

Every layer remains linear.

---

# The Linearity Problem

Suppose:

[
y = w_1x + b_1
]

and

[
z = w_2y + b_2
]

Substitute (y):

[
z = w_2(w_1x+b_1)+b_2
]

Expanding:

[
z = (w_2w_1)x + (w_2b_1+b_2)
]

Let:

[
w' = w_2w_1
]

[
b' = w_2b_1+b_2
]

Then:

[
z = w'x+b'
]

Still just a single line.

---

# The Big Problem

Even if we stack:

* 10 layers
* 100 layers
* 1,000 layers
* 1,000,000 layers

The network still collapses into:

[
y = wx+b
]

A single linear transformation.

Deep networks gain no additional power without non-linearity.

---

# Why Non-Linearity Matters

Imagine red and blue points:

```text
🔴 🔵 🔴
🔵 🔴 🔵
🔴 🔵 🔴
```

A straight line cannot separate them.

We need curved boundaries.

---

# Activation Functions

Activation functions introduce bends into the model.

Without activation:

```text
-----------
```

With activation:

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

Neural networks existed as early as the 1970s.

However:

* Good activation functions were uncommon.
* Training techniques were weak.
* Computing power was limited.

As a result, deep learning did not become practical until much later.

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

[
\sigma(x)=\frac{1}{1+e^{-x}}
]

Examples:

```text
Input = -9999 → ≈0
Input = 0     → 0.5
Input = 9999  → ≈1
```

### Interpretation

Acts like a probability output.

---

# Tanh

Maps values between:

```text
-1 and 1
```

Formula:

[
\tanh(x)
]

Examples:

```text
Very Negative → -1
0             → 0
Very Positive → 1
```

### Advantage

Centered around zero.

---

# ReLU

**Rectified Linear Unit**

Formula:

[
f(x)=\max(0,x)
]

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
| ----- | ------ |
| -100  | 0      |
| -2    | 0      |
| 0     | 0      |
| 2     | 2      |
| 10000 | 10000  |

---

# Why ReLU?

For Sigmoid and Tanh:

Large values get compressed.

For ReLU:

Positive values remain untouched.

Benefits:

* Faster training
* Better gradients
* Less vanishing gradient problem

---

# GELU

**Gaussian Error Linear Unit**

Purpose:

* Smoother than ReLU
* Preserves useful information
* Better performance in deep models

Used in:

* BERT
* GPT
* Transformers
* Modern LLMs

---

# Swish

Another smooth activation function.

Benefits:

* Smooth gradients
* Better information flow
* Sometimes outperforms ReLU

---

# Final Intuition

A neural network works like:

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

> A neural network is a collection of weighted neurons, and activation functions introduce non-linearity so that the network can learn complex patterns instead of collapsing into a single straight-line equation.
