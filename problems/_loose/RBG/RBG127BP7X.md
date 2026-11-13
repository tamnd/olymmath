---
tag: RBG127BP7X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h560333
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10089
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212085
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2013
    source: hf-ai-mo-aops
    label: 2013 Online Math Open Problems
---
Al has the cards $1,2,\dots,10$ in a row in increasing order. He first chooses the cards labeled $1$ , $2$ , and $3$ , and rearranges them among their positions in the row in one of six ways (he can leave the positions unchanged). He then chooses the cards labeled $2$ , $3$ , and $4$ , and rearranges them among their positions in the row in one of six ways. (For example, his first move could have made the sequence $3,2,1,4,5,\dots,$ and his second move could have rearranged that to $2,4,1,3,5,\dots$ .) He continues this process until he has rearranged the cards with labels $8$ , $9$ , $10$ . Determine the number of possible orderings of cards he can end up with.

*Proposed by Ray Li*
