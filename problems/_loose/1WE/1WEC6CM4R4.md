---
tag: 1WEC6CM4R4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=35390
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Blood Groups. As is well known (Landsteiner, Janeway, Moss, and others), there are 4 blood groups in humans: $O, A, B, AB$ (terminology of Dungern and Hirschfeld; this classification makes it possible to determine whether a given person can serve as a donor for a certain other person). Let the symbol $X \rightarrow Y$ denote the statement: "An individual with blood group $X$ can give their blood to an individual with blood group $Y$ without danger to the latter." Then the laws discovered by the above-mentioned scientists can be formulated as follows:
I. $X \rightarrow X$ for any $X$.

II. $O \rightarrow X$ for any $X$.

III. $X \rightarrow AB$ for any $X$.

IV. Any relation $X \rightarrow Y$, not reducible to I, II, and III, is false.

Prove that

$1^{\circ}$ The system of laws I-IV is contradictory.

$2^{\circ}$ From laws I-IV, it follows that for any $X$, $Y, Z$, from $X \rightarrow Y$ and $Y \rightarrow Z$ it follows that $X \rightarrow Z$.

$3^{\circ}$ From I-IV, it follows that the relation $A \rightarrow B$ is false.

Explanation. The phrase "for any $X$ " in I, II, III means that the implication $\rightarrow$ is valid for $X$ coinciding with $O, A, B$, or $AB$. The same remark applies to $2^{\circ}$.
