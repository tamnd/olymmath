---
tag: X8JZKKW1CD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1994 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h86773
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22952
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224080
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1994
    source: hf-ai-mo-aops
    label: 1994 IberoAmerican
---
A number $n$ is said to be *nice* if it exists an integer $r>0$ such that the expression of $n$ in base $r$ has all
its digits equal. For example, 62 and 15 are $\emph{nice}$ because 62 is 222 in base 5, and 15 is 33 in base 4. Show that 1993 is not *nice*, but 1994 is.
