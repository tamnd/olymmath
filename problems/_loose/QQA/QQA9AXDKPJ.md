---
tag: QQA9AXDKPJ
kind: problem
type: answer
answer: f'(x) = 0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238734
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In whatever follows $f$ denotes a differentiable function from $\mathbb{R}$ to $\mathbb{R}$. $f \circ f$
denotes the composition of $f(x)$.
$\textbf{(a)}$ If $f\circ f(x) = f(x) \forall x \in \mathbb{R}$ then for all $x$, $f'(x) =$ or $f'(f(x)) =$. Fill in the
blank and justify.
$\textbf{(b)}$Assume that the range of $f$ is of the form $ \left(-\infty , +\infty \right), [a, \infty ),(- \infty , b], [a, b] $.
Show that if $f \circ f = f$, then the range of $f$ is $\mathbb{R}$.
$\textbf{(c)}$ If $g$ satisfies $g \circ g \circ g = g$, then $g$ is onto. Prove that $g$ is either strictly increasing or strictly decreasing. Furthermore show that if $g$ is strictly increasing, then $g$ is unique.
