---
tag: PNBQBH0B2V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33434
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Establish the validity of the following properties of the operations $\cap$ (intersection) and $\cup$ (union):

$A \cup B=B \cup A, A \cap B=B \cap A$ (commutativity),

$A \cup(B \cup C)=(A \cup B) \cup C, A \cap(B \cap C)=(A \cap B) \cap C$ (associativity)

$A \cap(B \cup C)=(A \cap B) \cup(A \cap C), A \cup(B \cap C)=(A \cup B) \cap(A \cup C)$ (distributivity),

$A \cup A=A, A \cap A=A$ (idempotence).

Also show that $\overline{A \cup B}=\bar{A} \cap \bar{B}, \overline{A \cap B}=\bar{A} \cup \bar{B}$.
