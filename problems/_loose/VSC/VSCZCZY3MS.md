---
tag: VSCZCZY3MS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h361144
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5108
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207250
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2010
    source: hf-ai-mo-aops
    label: 2010 Iran MO (3rd Round)
---
suppose that $\mathcal F\subseteq X^{(k)}$ and $|X|=n$ . we know that for every three distinct elements of $\mathcal F$ like $A,B,C$ , at most one of $A\cap B$ , $B\cap C$ and $C\cap A$ is $\phi$ . for $k\le \frac{n}{2}$ prove that:
a) $|\mathcal F|\le max(1,4-\frac{n}{k})\times \dbinom{n-1}{k-1}$ .(15 points)
b) find all cases of equality in a) for $k\le \frac{n}{3}$ .(5 points)
