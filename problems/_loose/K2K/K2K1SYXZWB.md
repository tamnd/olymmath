---
tag: K2K1SYXZWB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1988 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2094828
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28038
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1988 Tournament Of Towns
---
Consider a sequence of words each consisting of two letters, $A$ and $B$ . The first word is " $A$ " , while the second word is " $B$ " . The $k$ -th word is obtained from the ( $k -2$ )-nd by writing after it the ( $k -1$ )th one. (So the first few elements of the sequence are " $A$ " , " $B$ " ," $AB$ " , " $BAB$ " , " $ABBAB$ " . ) Does there exist in this sequence a "periodical" word, i.e. a word of the form $P P P ... P$ , where $P$ is a word , repeated at least once?

(Remark: For instance, the word $BABBBABB$ is of the form $PP$ , in which $P$ is repeated exactly once . )

(A. Andjans, Riga)
