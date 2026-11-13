---
tag: GC8JFPGF8X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h455124
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66588
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199581
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
Label one disk " $1$ ", two disks " $2$ ", three disks " $3$ " $, ...,$ fifty disks " $50$ ". Put these $1+2+3+ \cdots+50=1275$ labeled disks in a box. Disks are then drawn from the box at random without replacement. The minimum number of disks that must be drawn to guarantee drawing at least ten disks with the same label is $ \textbf{(A)}\ 10 \textbf{(B)}\ 51 \textbf{(C)}\ 415 \textbf{(D)}\ 451 \textbf{(E)}\ 501 $
