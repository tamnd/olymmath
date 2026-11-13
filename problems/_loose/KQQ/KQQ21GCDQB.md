---
tag: KQQ21GCDQB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1987 IMO Longlists
    url: https://artofproblemsolving.com/community/c6h365319
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=24731
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225422
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ill/1987
    source: hf-ai-mo-aops
    label: 1987 IMO Longlists
---
Suppose we have a pack of $2n$ cards, in the order $1, 2, . . . , 2n$ . A perfect shuffle of these cards changes the order to $n+1, 1, n+2, 2, . . ., n- 1, 2n, n$ ; i.e., the cards originally in the first $n$ positions have been moved to the places $2, 4, . . . , 2n$ , while the remaining $n$ cards, in their original order, fill the odd positions $1, 3, . . . , 2n - 1.$ Suppose we start with the cards in the above order $1, 2, . . . , 2n$ and then successively apply perfect shuffles.
What conditions on the number $n$ are necessary for the cards eventually to return to their original order? Justify your answer.
