---
tag: DXECQHVFHR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108426
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove the following equivalence relations:
$$
\begin{array}{c}
A \cup B=\varnothing \Leftrightarrow A=\varnothing \text { and } B=\varnothing, \\
A \cup B=A-B \Leftrightarrow B=\varnothing, \\
A-B=A \cap B \Leftrightarrow A=\varnothing, \\
A \cup B \subseteq C \Leftrightarrow A \subseteq C \text { and } B \subseteq C, \\
C \subseteq A \cap B \Leftrightarrow C \subseteq A \text { and } C \subseteq B, \\
A-B=B-A \Leftrightarrow A=B, \\
A \cap B=A \cup B \Leftrightarrow A=B, \\
A \subseteq B \text { and } C \subseteq D \Leftrightarrow(A-B) \cup(C-D)=\varnothing, \\
A-B=A \Leftrightarrow B-A=B, \\
A \subseteq B \cup C \Leftrightarrow A-B \subseteq C, \\
A \subseteq B \subseteq C \Leftrightarrow A \cup B=B \cap C, \\
A=B \Leftrightarrow(A-B) \cup(B-A)=\varnothing, \\
A-K=B-K \Leftrightarrow(A \triangle B) \subseteq K .
\end{array}
$$
