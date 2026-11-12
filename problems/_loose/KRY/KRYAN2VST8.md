---
tag: KRYAN2VST8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1991 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h3335680
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28170
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54644
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1991 Tournament Of Towns
---
A sequence $a_n$ is determined by the rules $a_0 = 9$ and for any nonnegative $k$ , $$ a_{k+1}=3a_k^4+4a_k^3. $$ Prove that $a_{10}$ contains more than $1000$ nines in decimal notation.

(Yao)
