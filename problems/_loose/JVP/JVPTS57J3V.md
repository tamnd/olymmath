---
tag: JVPTS57J3V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h254120
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35769
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234254
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
For any two rational numbers $ p$ and $ q$ in the interval $ (0,1)$ and function $ f$ , there is always $ f \left( \frac{p+q}{2} \right) \leq \frac{f(p) + f(q)}{2}$ . Then prove that for any rational numbers $ \lambda, x_1, x_2 \in (0,1)$ , there is always:

$$ f( \lambda x_1 + (1-\lambda) x_2 ) \leq \lambda f(x_i) + (1-\lambda) f(x_2)$$
