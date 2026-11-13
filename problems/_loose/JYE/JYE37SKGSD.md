---
tag: JYE37SKGSD
kind: problem
type: answer
answer: \alpha \leq \frac{1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269037
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ \gamma: [0,1]\rightarrow [0,1]\times [0,1]$ be a mapping such that for each $ s,t\in [0,1]$
$$ |\gamma(s) - \gamma(t)|\leq M|s - t|^\alpha
$$
in which $ \alpha,M$ are fixed numbers. Prove that if $ \gamma$ is surjective, then $ \alpha\leq\frac12$
