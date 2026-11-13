---
tag: N5W3JRCB1J
kind: problem
type: answer
answer: \frac{1}{2 \cdot \text{lcm}(p, q)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221702
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p,q$ be positive integers. For any $a,b\in\mathbb{R}$ define the sets $$P(a)=\bigg\{a_n=a \ + \ n \ \cdot \ \frac{1}{p} : n\in\mathbb{N}\bigg\}\text{ and }Q(b)=\bigg\{b_n=b \ + \ n \ \cdot \ \frac{1}{q} : n\in\mathbb{N}\bigg\}.$$
The *distance* between $P(a)$ and $Q(b)$ is the minimum value of $|x-y|$ as $x\in P(a), y\in Q(b)$. Find the maximum value of the distance between $P(a)$ and $Q(b)$ as $a,b\in\mathbb{R}$.
