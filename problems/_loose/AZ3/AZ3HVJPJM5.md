---
tag: AZ3HVJPJM5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223872
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A collection $F$ of distinct (not necessarily non-empty) subsets of $X = \{1,2,\ldots,300\}$ is *lovely* if for any three (not necessarily distinct) sets $A$, $B$ and $C$ in $F$ at most three out of the following eight sets are non-empty
\begin{align*}A \cap B \cap C, \ \ \ \overline{A} \cap B \cap C, \ \ \ A \cap \overline{B} \cap C, \ \ \ A \cap B \cap \overline{C}, \\ \overline{A} \cap \overline{B} \cap C, \ \ \ \overline{A} \cap B \cap \overline {C}, \ \ \ A \cap \overline{B} \cap \overline{C}, \ \ \ \overline{A} \cap \overline{B} \cap \overline{C}
\end{align*}
where $\overline{S}$ denotes the set of all elements of $X$ which are not in $S$.

What is the greatest possible number of sets in a lovely collection?
