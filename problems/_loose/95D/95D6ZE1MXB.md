---
tag: 95D6ZE1MXB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 China Second Round Olympiad
    url: https://artofproblemsolving.com/community/c6h502322
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7750
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94274
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=66
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/2012
    source: hf-ai-mo-aops
    label: 2012 China Second Round Olympiad
  - at: cn-league
    source: hf-mathnet
    label: China China Mathematical Competition (Complementary Test)
---
Let $P_0 ,P_1 ,P_2 , ... ,P_n$ be $n+1$ points in the plane. Let $d$ ( $d>0$ ) denote the minimal value of all the distances between any two points. Prove that
$$|P_0P_1|\cdot |P_0P_2|\cdot ... \cdot |P_0P_n|>(\frac{d}{3})^n\sqrt{(n+1)!}.$$
