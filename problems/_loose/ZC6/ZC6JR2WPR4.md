---
tag: ZC6JR2WPR4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 Vietnam National Olympiad
    url: https://artofproblemsolving.com/community/c6h234357
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=79337
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268140
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo/2004
    source: hf-ai-mo-aops
    label: 2004 Vietnam National Olympiad
---
The sequence $ (x_n)^{\infty}_{n=1}$ is defined by $ x_1 = 1$ and $ x_{n+1} =\frac{(2 + \cos 2\alpha)x_n - \cos^2\alpha}{(2 - 2 \cos 2\alpha)x_n + 2 - \cos 2\alpha}$ , for all $ n \in\mathbb{N}$ , where $ \alpha$ is a given real parameter. Find all values of $ \alpha$ for which the sequence $ (y_n)$ given by $ y_n = \sum_{k=1}^{n}\frac{1}{2x_k+1}$ has a finite limit when $ n \to +\infty$ and find that limit.
