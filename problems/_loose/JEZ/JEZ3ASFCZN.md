---
tag: JEZ3ASFCZN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=1279
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/1980
    source: hf-numinamath-1-5
    label: XXXI - II - Problem 1
---
Students $ A $ and $ B $ play according to the following rules: student $ A $ chooses a vector $ \overrightarrow{a_1} $ of length 1 on the plane, then student $ B $ gives a number $ s_1 $, equal to $ 1 $ or $ -1 $; then student $ A $ chooses a vector $ \overrightarrow{a_1} $ of length $ 1 $, and in turn, student $ B $ gives a number $ s_2 $ equal to $ 1 $ or $ -1 $, and so on. Student $ B $ wins if for some $ n $ the vector $ \sum_{j=1}^n \varepsilon_j \overrightarrow{a_j} $ has a length greater than a predetermined number $ R $ before the game starts. Prove that student $ B $ can achieve a win in no more than $ R^2 + 1 $ steps, regardless of the actions of partner $ A $.
