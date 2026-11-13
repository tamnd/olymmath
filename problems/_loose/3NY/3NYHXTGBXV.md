---
tag: 3NYHXTGBXV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h254115
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35767
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234252
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2002
    source: hf-ai-mo-aops
    label: 2002 China Team Selection Test
---
Let $ p_i \geq 2$ , $ i = 1,2, \cdots n$ be $ n$ integers such that any two of them are relatively prime. Let:

$$ P = \{ x = \sum_{i = 1}^{n} x_i \prod_{j = 1, j \neq i}^{n} p_j \mid x_i \text{is a non - negative integer}, i = 1,2, \cdots n \}
$$
Prove that the biggest integer $ M$ such that $ M \not\in P$ is greater than $ \frac {n - 2}{2} \cdot \prod_{i = 1}^{n} p_i$ , and also find $ M$ .
