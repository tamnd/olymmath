---
tag: YZTKC156XR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h454569
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4186
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206370
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2009
    source: hf-ai-mo-aops
    label: 2009 Stanford Mathematics Tournament
---
$ABCD$ forms a rhombus. $E$ is the intersection of $AC$ and $BD$ . $F$ lie on $AD$ such that $EF$ is perpendicular to $FD$ . Given $EF=2$ and $FD=1$ . Find the area of the rhombus $ABCD$
