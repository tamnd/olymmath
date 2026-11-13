---
tag: P7MS2TFV2F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h254976
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35826
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234302
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2004
    source: hf-ai-mo-aops
    label: 2004 China Team Selection Test
---
Let $ m_1$ , $ m_2$ , $ \cdots$ , $ m_r$ (may not distinct) and $ n_1$ , $ n_2$ $ \cdots$ , $ n_s$ (may not distinct) be two groups of positive integers such that for any positive integer $ d$ larger than $ 1$ , the numbers of which can be divided by $ d$ in group $ m_1$ , $ m_2$ , $ \cdots$ , $ m_r$ (including repeated numbers) are no less than that in group $ n_1$ , $ n_2$ $ \cdots$ , $ n_s$ (including repeated numbers).

Prove that $ \frac{m_1 \cdot m_2 \cdots m_r}{n_1 \cdot n_2 \cdots n_s}$ is integer.
