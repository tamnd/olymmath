---
tag: SKW6FF90V5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206971
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that any continuos function $ f: \mathbb{R}\rightarrow \mathbb{R}$ with

$$ f(x)=\left\{ \begin{aligned} a_1x+b_1\ ,\ \text{for } x\le 1 \\
a_2x+b_2\ ,\ \text{for } x>1 \end{aligned} \right.$$

where $ a_1,a_2,b_1,b_2\in \mathbb{R}$, can be written as:

$$ f(x)=m_1x+n_1+\epsilon|m_2x+n_2|\ ,\ \text{for } x\in \mathbb{R}$$

where $ m_1,m_2,n_1,n_2\in \mathbb{R}$ and $ \epsilon\in \{-1,+1\}$.
