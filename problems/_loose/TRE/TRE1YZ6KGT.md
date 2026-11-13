---
tag: TRE1YZ6KGT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=145329
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A team has 10 new workers, 6 of whom are male and 4 are female. Now they need to be assigned to 10 machines, one of which is a heavy machine that can only be operated by a male worker.
Here, the heavy machine is a restricted position, and the four female workers are restricted elements.
To solve this type of restricted permutation problem, there are two commonly used direct methods, which have completely different approaches. These two methods are the Priority Method and the Insertion Method.

The idea behind the Priority Method is: to prioritize the placement of restricted objects, and then consider the placement of general objects. Of course, in the restricted objects that are prioritized, sometimes they are restricted elements, sometimes they are restricted positions, and sometimes both of these considerations can be adopted. Let's look at the calculation of different cases in examples $3 \sim 5$ below.
