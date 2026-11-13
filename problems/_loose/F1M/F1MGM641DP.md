---
tag: F1MGM641DP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h238320
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40740
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237610
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=153
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2008
    source: hf-ai-mo-aops
    label: 2008 Hong Kong TST
---
Let $ f: Z \to Z$ be such that $ f(1) = 1, f(2) = 20, f(-4) = -4$ and $ f(x+y) = f(x) +f(y)+axy(x+y)+bxy+c(x+y)+4 \forall x,y \in Z$ , where $ a,b,c$ are constants.

(a) Find a formula for $ f(x)$ , where $ x$ is any integer.
(b) If $ f(x) \geq mx^2+(5m+1)x+4m$ for all non-negative integers $ x$ , find the greatest possible value of $ m$ .
