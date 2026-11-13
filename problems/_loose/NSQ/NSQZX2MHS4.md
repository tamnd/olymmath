---
tag: NSQZX2MHS4
kind: problem
type: answer
answer: \left(0, \frac{27}{64} + \frac{27}{16\sqrt[3]{2}} + \frac{3153}{1024\sqrt[3]{4}}\right)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218733
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all possible (finite or infinite) values of
$$\lim_{x \to -\infty} f(x)-\lim_{x \to \infty} f(x),$$
if $f:\mathbb{R} \to \mathbb{R}$ is a strictly decreasing continuous function satisfying
$$f(f(x))^4-f(f(x))+f(x)=1$$
for all $x \in \mathbb{R}$.
