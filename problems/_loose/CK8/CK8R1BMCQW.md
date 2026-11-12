---
tag: CK8R1BMCQW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 25th Philippine MO Qualifying Stage
    url: https://artofproblemsolving.com/community/c6h3513948
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50872
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-ai-mo-aops
    label: 25th Philippine MO Qualifying Stage
---
A function $f:\mathbb{N}\cup\{0\}\to \mathbb{N}\cup\{0\}$ is defined by $f(0)=0$ and $f(n)=1+f \left(n-3^{\lfloor \log_3n\rfloor}\right)$ for all integers $n\geq1$ . Find the value of $f(10^4)$ .
