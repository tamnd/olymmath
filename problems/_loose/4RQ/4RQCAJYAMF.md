---
tag: 4RQCAJYAMF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2038134
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28939
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228949
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2011 Tournament of Towns
---
Peter buys a lottery ticket on which he enters an $n$ -digit number, none of the digits being $0$ . On the draw date, the lottery administrators will reveal an $n\times n$ table, each cell containing one of the digits from $1$ to $9$ . A ticket wins a prize if it does not match any row or column of this table, read in either direction. Peter wants to bribe the administrators to reveal the digits on some cells chosen by Peter, so that Peter can guarantee to have a winning ticket. What is the minimum number of digits Peter has to know?
