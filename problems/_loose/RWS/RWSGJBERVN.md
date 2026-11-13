---
tag: RWSGJBERVN
kind: problem
type: answer
answer: \int_1^{\infty} |f'(x)| \, dx < \infty
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216722
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f: [0,\infty) \to \mathbb{R}$ be a continuously differentiable function satisfying

$$f(x) = \int_{x - 1}^xf(t)\mathrm{d}t$$

for all $x \geq 1$. Show that $f$ has bounded variation on $[1,\infty)$, i.e.

$$\int_1^{\infty} |f'(x)|\mathrm{d}x < \infty.$$
