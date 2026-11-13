---
tag: VWXRT3YYAK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=255
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
有 $n$ 對夫婦參加一場王國的盛宴, 丈夫們坐一圓桌, 妻子們坐另一圓桌。國王與皇后(不包含在這 $n$ 對夫婦中)要與他們握手。假設國王從某位男士開始握手, 而皇后從該男士的妻子開始握手。考慮兩種方式:
(i) 國王順時鐘依序和所有男士握手。當國王與某位男士握手時, 皇后順時鐘移動到該男士的妻子處, 與她握手。假設國王回到最初的那位男士處時, 皇后繞了圓桌 $a$ 圈。
(ii) 皇后順時鐘依序和所有女士握手。當皇后與某位女士握手時, 國王順時鐘移動到該女士的丈夫處, 與他握手。假設皇后回到最初的那位女士處時, 國王繞了圓桌 $b$ 圈。
試問: $|a - b|$ 的最大可能值。
