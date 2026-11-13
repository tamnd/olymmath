---
tag: 4HDWW0AFCX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h403509
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54451
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247951
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1998
    source: hf-ai-mo-aops
    label: 1998 Romania Team Selection Test
---
A word of length $n$ is an ordered sequence $x_1x_2\ldots x_n$ where $x_i$ is a letter from the set $\{ a,b,c \}$ . Denote by $A_n$ the set of words of length $n$ which do not contain any block $x_ix_{i+1}, i=1,2,\ldots ,n-1,$ of the form $aa$ or $bb$ and by $B_n$ the set of words of length $n$ in which none of the subsequences $x_ix_{i+1}x_{i+2}, i=1,2,\ldots n-2,$ contains all the letters $a,b,c$ .
Prove that $|B_{n+1}|=3|A_n|$ .

*Vasile Pop*
