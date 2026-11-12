---
tag: BMSNFBS3JA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33606
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that

$$
\begin{aligned}
& \overline{\left(\overline{\lim } A_{n}\right)}=\underline{\lim } \bar{A}_{n}, \overline{\left(\lim A_{n}\right)}=\overline{\lim } \bar{A}_{n}, \\
& \varliminf A_{n} \subseteq \varlimsup A_{n}, \varlimsup\left(A_{n} \cup B_{n}\right)=\varlimsup A_{n} \cup \lim B_{n}, \\
& \varliminf\left(A_{n} \cap B_{n}\right)=\underline{\lim } A_{n} \cap \emptyset B_{n},
\end{aligned}
$$

$$
\overline{\lim } A_{n} \cap \underline{\lim } B_{n} \subseteq \overline{\lim }\left(A_{n} \cap B_{n}\right) \subseteq \overline{\lim } A_{n} \cap \overline{\lim } B_{n}.
$$

If $A_{n} \uparrow A$ or $A_{n} \downarrow A$, then

$$
\underline{\lim } A_{n}=\varlimsup A_{n}.
$$
