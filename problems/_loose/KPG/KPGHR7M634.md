---
tag: KPGHR7M634
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h254122
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35770
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234255
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
Sequence $ \{ f_n(a) \}$ satisfies $ f_{n+1}(a) = 2 - \frac{a}{f_n(a)}$ , $ f_1(a) = 2$ , $ n=1,2, \cdots$ . If there exists a natural number $ n$ , such that $ f_{n+k}(a) = f_{k}(a), k=1,2, \cdots$ , then we call the non-zero real $ a$ a $ \textbf{periodic point}$ of $ f_n(a)$ .

Prove that the sufficient and necessary condition for $ a$ being a $ \textbf{periodic point}$ of $ f_n(a)$ is $ p_n(a-1)=0$ , where $ p_n(x)=\sum_{k=0}^{\left[ \frac{n-1}{2} \right]} (-1)^k C_n^{2k+1}x^k$ , here we define $ \frac{a}{0}= \infty$ and $ \frac{a}{\infty} = 0$ .
