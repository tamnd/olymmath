---
tag: YA1VRMHF8N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268968
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:\{0, 1\}^n \to \{0, 1\} \subseteq \mathbb{R}$ be a function. Call such a function a Boolean function.
Let $\wedge$ denote the component-wise multiplication in $\{0,1\}^n$. For example, for $n = 4$, $$(0,0,1,1) \wedge (0,1,0,1) = (0,0,0,1).$$

Let $S = \left\{i_1,i_2,\ldots ,i_k\right\} \subseteq \left\{1,2,\ldots ,n\right\}$. $f$ is called the oligarchy function over $S$ if $$f (x) = x_{i_1},x_{i_2},\ldots,x_{i_k}\ \text{ (with the usual multiplication),}$$

where $x_i$ denotes the $i$-th component of $x$. By convention, $f$ is called the oligarchy function over $\emptyset$ if $f$ is constantly 1.

(i) Suppose $f$ is not constantly zero. Show that $f$ is an oligarchy function if and only if $f$ satisfies $$f(x\wedge y)=f(x)f(y),\ \forall x,y\in\left\{0,1\right\}^n.$$

Let $Y$ be a uniformly distributed random variable over $\left\{0, 1\right\}^n$. Let $T$ be an operator that maps Boolean functions to functions $\left\{0, 1\right\}^n\to\mathbb{R}$, such that

$$(Tf)(x)=E_Y(f(x\wedge Y)),\ \forall x\in\left\{0,1\right\}^n$$

where $E_Y()$ denotes the expectation over $Y$. $f$ is called an eigenfunction of $T$ if $\exists\lambda\in\mathbb{R}\backslash\left\{0\right\}$ such that
$$(Tf)(x)=\lambda f(x),\ \forall x\in\left\{0,1\right\}^n$$

(ii) Prove that $f$ is an eigenfunction of $T$ if and only if $f$ is an oligarchy function.
