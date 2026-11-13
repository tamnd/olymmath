---
tag: Z1TQQBHXB4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1996 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h37603
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35701
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234215
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1996
    source: hf-ai-mo-aops
    label: 1996 China Team Selection Test
---
$S$ is the set of functions $f:\mathbb{N} \to \mathbb{R}$ that satisfy the following conditions:

**I.** $f(1) = 2$
**II.** $f(n+1) \geq f(n) \geq \frac{n}{n + 1} f(2n)$ for $n = 1, 2, \ldots$

Find the smallest $M \in \mathbb{N}$ such that for any $f \in S$ and any $n \in \mathbb{N}, f(n) < M$ .
