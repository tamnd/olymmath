---
tag: RSGWEDTEXJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h460011
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8423
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210487
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2012
    source: hf-ai-mo-aops
    label: 2012 Online Math Open Problems
---
$p,q,r$ are real numbers satisfying $$\frac{(p+q)(q+r)(r+p)}{pqr} = 24$$ $$\frac{(p-2q)(q-2r)(r-2p)}{pqr} = 10.$$ Given that $\frac{p}{q} + \frac{q}{r} + \frac{r}{p}$ can be expressed in the form $\frac{m}{n}$ , where $m,n$ are relatively prime positive integers, compute $m+n$ .

*Author: Alex Zhu*
