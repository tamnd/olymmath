---
tag: N1ZK87S1XW
kind: problem
type: answer
answer: f = g
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247079
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the functions $f,g:\mathbb{R}\to\mathbb{R}$ such that $f{}$ is continous. For any real numbers $a<b<c$ there exists a sequence $(x_n)_{n\geqslant 1}$ which converges to $b{}$ and for which the limit of $g(x_n)$ as $n{}$ tends to infinity exists and satisfies $$f(a)<\lim_{n\to\infty}g(x_n)<f(c).$$

- Give an example of a pair of such functions $f,g$ for which $g{}$ is discontinous at every point.

- Prove that if $g{}$ is monotonous, then $f=g.$
