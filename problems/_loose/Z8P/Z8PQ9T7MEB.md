---
tag: Z8PQ9T7MEB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1991 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h42549
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35669
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106405
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1991
    source: hf-ai-mo-aops
    label: 1991 China Team Selection Test
---
Let real coefficient polynomial $f(x) = x^n + a_1 \cdot x^{n-1} + \ldots + a_n$ has real roots $b_1, b_2, \ldots, b_n$ , $n \geq 2,$ prove that $\forall x \geq max\{b_1, b_2, \ldots, b_n\}$ , we have
$$f(x+1) \geq \frac{2 \cdot n^2}{\frac{1}{x-b_1} + \frac{1}{x-b_2} + \ldots + \frac{1}{x-b_n}}.$$
