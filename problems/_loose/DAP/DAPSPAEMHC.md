---
tag: DAPSPAEMHC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 CMIMC Team
    url: https://artofproblemsolving.com/community/c6h1998890
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70811
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2020
    source: hf-ai-mo-aops
    label: 2020 CMIMC Team
---
Misha is currently taking a Complexity Theory exam, but he seems to have forgotten a lot of the material! In the question, he is asked to fill in the following boxes with $\subseteq$ and $\subsetneq$ to identify the relationship between different complexity classes: $$ \mathsf{NL}\ \fbox{\phantom{tt}}\ \mathsf{P}\ \fbox{\phantom{tt}}\ \mathsf{NP}\ \fbox{\phantom{tt}}\ \mathsf{PH}\ \fbox{\phantom{tt}}\ \mathsf{PSPACE}\ \fbox{\phantom{tt}}\ \mathsf {EXP} $$ and $$ \mathsf{coNL}\ \fbox{\phantom{tt}}\ \mathsf{P}\ \fbox{\phantom{tt}}\ \mathsf{coNP}\ \fbox{\phantom{tt}}\ \mathsf{PH} $$ Luckily, he remembers that $\mathsf{P} \neq \mathsf{EXP}$ , $\mathsf{NL} \neq \mathsf{PSPACE}$ , $\mathsf{coNL} \neq \mathsf{PSPACE}$ , and $\mathsf{NP} \neq \mathsf{coNP}\implies \mathsf{P}\neq \mathsf{NP} \land \mathsf{P}\neq \mathsf{coNP}$ .
How many ways are there for him to fill in the boxes so as not to contradict what he remembers?
