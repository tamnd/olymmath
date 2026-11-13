---
tag: 46FDQSGC90
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h437049
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66416
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199413
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
An unfair coin has probability $p$ of coming up heads on a single toss. Let $w$ be the probability that, in $5$ independent toss of this coin, heads come up exactly $3$ times. If $w = 144 / 625$ , then $ \textbf{(A)}\ p\text{ must be }2/5$ $ \textbf{(B)}\ p\text{ must be }3/5$ $ \textbf{(C)}\ p\text{ must be greater than }3/5$ $ \textbf{(D)}\ p\text{ is not uniquely determined}$ $ \textbf{(E)}\ \text{there is no value of }p\text{ for which }w = 144/625$
