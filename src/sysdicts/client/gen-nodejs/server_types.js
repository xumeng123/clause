//
// Autogenerated by Thrift Compiler (0.12.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
var Entity = module.exports.Entity = function(args) {
  this.slotname = null;
  this.dictname = null;
  this.val = null;
  this.score = null;
  if (args) {
    if (args.slotname !== undefined && args.slotname !== null) {
      this.slotname = args.slotname;
    }
    if (args.dictname !== undefined && args.dictname !== null) {
      this.dictname = args.dictname;
    }
    if (args.val !== undefined && args.val !== null) {
      this.val = args.val;
    }
    if (args.score !== undefined && args.score !== null) {
      this.score = args.score;
    }
  }
};
Entity.prototype = {};
Entity.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.slotname = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.dictname = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.val = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.DOUBLE) {
        this.score = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Entity.prototype.write = function(output) {
  output.writeStructBegin('Entity');
  if (this.slotname !== null && this.slotname !== undefined) {
    output.writeFieldBegin('slotname', Thrift.Type.STRING, 1);
    output.writeString(this.slotname);
    output.writeFieldEnd();
  }
  if (this.dictname !== null && this.dictname !== undefined) {
    output.writeFieldBegin('dictname', Thrift.Type.STRING, 2);
    output.writeString(this.dictname);
    output.writeFieldEnd();
  }
  if (this.val !== null && this.val !== undefined) {
    output.writeFieldBegin('val', Thrift.Type.STRING, 3);
    output.writeString(this.val);
    output.writeFieldEnd();
  }
  if (this.score !== null && this.score !== undefined) {
    output.writeFieldBegin('score', Thrift.Type.DOUBLE, 4);
    output.writeDouble(this.score);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Data = module.exports.Data = function(args) {
  this.rc = null;
  this.msg = null;
  this.error = null;
  this.query = null;
  this.entities = null;
  if (args) {
    if (args.rc !== undefined && args.rc !== null) {
      this.rc = args.rc;
    }
    if (args.msg !== undefined && args.msg !== null) {
      this.msg = args.msg;
    }
    if (args.error !== undefined && args.error !== null) {
      this.error = args.error;
    }
    if (args.query !== undefined && args.query !== null) {
      this.query = args.query;
    }
    if (args.entities !== undefined && args.entities !== null) {
      this.entities = Thrift.copyList(args.entities, [ttypes.Entity]);
    }
  }
};
Data.prototype = {};
Data.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.rc = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.msg = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.error = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.query = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.LIST) {
        this.entities = [];
        var _rtmp31 = input.readListBegin();
        var _size0 = _rtmp31.size || 0;
        for (var _i2 = 0; _i2 < _size0; ++_i2) {
          var elem3 = null;
          elem3 = new ttypes.Entity();
          elem3.read(input);
          this.entities.push(elem3);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Data.prototype.write = function(output) {
  output.writeStructBegin('Data');
  if (this.rc !== null && this.rc !== undefined) {
    output.writeFieldBegin('rc', Thrift.Type.I32, 1);
    output.writeI32(this.rc);
    output.writeFieldEnd();
  }
  if (this.msg !== null && this.msg !== undefined) {
    output.writeFieldBegin('msg', Thrift.Type.STRING, 2);
    output.writeString(this.msg);
    output.writeFieldEnd();
  }
  if (this.error !== null && this.error !== undefined) {
    output.writeFieldBegin('error', Thrift.Type.STRING, 3);
    output.writeString(this.error);
    output.writeFieldEnd();
  }
  if (this.query !== null && this.query !== undefined) {
    output.writeFieldBegin('query', Thrift.Type.STRING, 4);
    output.writeString(this.query);
    output.writeFieldEnd();
  }
  if (this.entities !== null && this.entities !== undefined) {
    output.writeFieldBegin('entities', Thrift.Type.LIST, 5);
    output.writeListBegin(Thrift.Type.STRUCT, this.entities.length);
    for (var iter4 in this.entities) {
      if (this.entities.hasOwnProperty(iter4)) {
        iter4 = this.entities[iter4];
        iter4.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

