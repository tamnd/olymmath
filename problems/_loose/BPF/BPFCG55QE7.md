---
tag: BPFCG55QE7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1992 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h474096
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54368
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247868
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1992
    source: hf-ai-mo-aops
    label: 1992 Romania Team Selection Test
---
Let $ a_1, a_2, ..., a_k $ be distinct positive integers such that the $2^k$ sums $ \sum\limits_{i=1}^{k}{\epsilon_i a_i}$ , $\epsilon_i\in\left\{0,1\right\}$ are distinct.
a) Show that $ \dfrac{1}{a_1}+\dfrac{1}{a_2}+...+\dfrac{1}{a_k}\le2(1-2^{-k}) $ ;
b) Find the sequences $(a_1,a_2,...,a_k)$ for which the equality holds.

*Șerban Buzețeanu*
