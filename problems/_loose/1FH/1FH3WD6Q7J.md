---
tag: 1FH3WD6Q7J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 National High School Mathematics League
    url: https://artofproblemsolving.com/community/c6h2021630
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36199
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234747
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/1997
    source: hf-ai-mo-aops
    label: 1997 National High School Mathematics League
---
$a_1,a_2,a_3,a_4,a_5$ are non-zero complex numbers, satisfying: $ \begin{cases}
\frac{a_2}{a_1}=\frac{a_3}{a_2}=\frac{a_4}{a_3}=\frac{a_5}{a_4}
a_1+a_2+a_3+a_4+a_5=4\left(\frac{1}{a_1}+\frac{1}{a_2}+\frac{1}{a_3}+\frac{1}{a_4}+\frac{1}{a_5}\right)=S
\end{cases}$ Where $S$ is a real number that $|S|\leq2$ Prove that points that $a_1,a_2,a_3,a_4,a_5$ refers to in the complex plane are concyclic.
