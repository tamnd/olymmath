---
tag: RSY4XMC3GA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h276167
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42166
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238751
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2001
    source: hf-ai-mo-aops
    label: 2001 India IMO Training Camp
---
If on $ \triangle ABC$ , trinagles $ AEB$ and $ AFC$ are constructed externally such that $ \angle AEB=2 \alpha$ , $ \angle AFB= 2 \beta$ .
$ AE=EB$ , $ AF=FC$ .
COnstructed externally on $ BC$ is triangle $ BDC$ with $ \angle DBC= \beta$ , $ \angle BCD= \alpha$ .
Prove that 1. $ DA$ is perpendicular to $ EF$ .
2. If $ T$ is the projection of $ D$ on $ BC$ , then prove that $ \frac{DA}{EF}= 2 \frac{DT}{BC}$ .
