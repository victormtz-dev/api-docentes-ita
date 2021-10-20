import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

const teacherSchema = new Schema(
  {
    name: {
      //nombre completo
      type: String,
      required: true,
      trime: true,
      uppercase: true,
    },
    departement: {
      //departamento al que pertenecen
      type: String,
      enum: ["SNA", "ARQ", "ISC", "IEM", "IBQ", "IGE", "LA", "CP", "CB"],
      default: "SNA",
    },

    profilePicture: {
      //foto de perfil del profesor
      type: String,
    },
    cv: {
      //CV del profesor
      type: String,
    },
    email: {
      //correo institucional del profesor
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    labels: [
      {
        //etiquetas
        type: String,
      },
    ],
    scoreEvaluacionDocente: {
      //evaluacion que obtuvieron los docentes en la evaluacion docente
      type: Number,
    },
    performance: {
      //rendimiento
      type: String,
      enum: ["Excelente", "Bueno", "Notable", "Suficiente", "Insuficiente"],
    },
    status: {
      //activo o inactivo
      type: Boolean,
      default: true,
    },

    /*
    comments: [{
        author: {
            type: String,
        },
        comment: {
            type: String,
        },
        date: {
            type: Date,
            default: Date.now()
        },
        subject: {
            type: String,
            trim: true,
            uppercase: true,
        }
    }], */
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Teacher", teacherSchema);
