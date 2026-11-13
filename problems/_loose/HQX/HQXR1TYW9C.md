---
tag: HQXR1TYW9C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1991 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2964364
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39360
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236660
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1991
    source: hf-ai-mo-aops
    label: 1991 Bundeswettbewerb Mathematik
---
A strip of width $1$ is to be divided by rectangular panels of common width $1$ and denominations long $a_1$ , $a_2$ , $a_3$ , $. . .$ be paved without gaps ( $a_1 \ne 1$ ). From the second panel on, each panel is similar but not congruent to the already paved part of the strip. When the first $n$ slabs are laid, the length of the paved part of the strip is $sn$ . Given $a_1$ , is there a number that is not surpassed by any $s_n$ ? The accuracy answer has to be proven.
