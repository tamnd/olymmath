---
tag: VBHQXVNBR7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266933
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a very simple model for an open self-replicative system such as a cell, or an economy. A system $\mathbf{S}$ is comprised of two kinds of mass: one kind is $\mathbf{S}_R$ that is capable of of taking raw material that comes from outside the system, and converting it into components of the system, and the other is $\mathbf{S}_O$ that takes care of other things. Think of $\mathbf{S}_R$ like factories and $\mathbf{S}_O$ like street sweepers. One part is creating new things and the other is doing maintenance on what already exists. The catch is, the material in $\mathbf{S}_R$ must not only make the rest of the system, but also itself! Suppose that the materials in $\mathbf{S}_R$ and the materials in $\mathbf{S}_O$ cost the same amount of energy for $\mathbf{S}_R$ to make per unit amount. Suppose the material in $\mathbf{S}_R$ can convert raw material from the environment into system mass at the rate $\gamma_R = 3 \text{ kg } \mathbf{S}/\text{hr}/\text{kg }\mathbf{S}_R$. If the system doubles in size once every 2 $\text{hrs}$, what fraction of the material in $\mathbf{S}$ is devoted to $\mathbf{S}_O$?

$\textbf{Assumptions:}$ The fact that the system continuously doubles in size in a fixed time means that this system is in exponential growth, i.e. $\dot{\mathbf{S}} = \lambda \mathbf{S}$.

*Problem proposed by Josh Silverman*
