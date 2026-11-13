---
tag: MJVFMQFSH5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h590795
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73064
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262986
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2006
    source: hf-ai-mo-aops
    label: 2006 Princeton University Math Competition
---
Suppose that $P(x)$ is a polynomial with the property that there exists another polynomial $Q(x)$ to satisfy $P(x)Q(x)=P(x^2)$ . $P(x)$ and $Q(x)$ may have complex coefficients. If $P(x)$ is a quintic with distinct complex roots $r_1,\dots,r_5$ , find all possible values of $|r_1|+\dots+|r_5|$ .
