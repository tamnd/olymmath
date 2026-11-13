---
tag: WJM4AQ50MA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h98976
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35863
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234334
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2005
    source: hf-ai-mo-aops
    label: 2005 China Team Selection Test
---
Given prime number $p$ . $a_1,a_2 \cdots a_k$ ( $k \geq 3$ ) are integers not divible by $p$ and have different residuals when divided by $p$ . Let
$$ S_n= \{ n \mid 1 \leq n \leq p-1, (na_1)_p < \cdots < (na_k)_p \} $$
Here $(b)_p$ denotes the residual when integer $b$ is divided by $p$ . Prove that $|S|< \frac{2p}{k+1}$ .
