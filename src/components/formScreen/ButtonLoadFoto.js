import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const ButtonLoadFoto = () => {

    const { dispatchFoto } = useContext(AuthContext)



    const [image, setImage] = useState('')
    const [preview, setPreview] = useState('')
    const [status, setStatus] = useState('')

    useEffect(() => {
        if (image) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result)

            }
            reader.readAsDataURL(image)
            setStatus(true)

        } else {
            setPreview('')
        }

    }, [image])

    // useEffect(() => {
    //     if (status) {
    //         dispatchFoto({
    //             type: types.foto,
    //             payload: {
    //                 foto: preview.split(',')[1]
    //             }
    //         })
    //     }
    //     return () => setStatus(false)


    // }, [status])




    const fileInputRef = useRef()

    const handleRef = (e) => {
        e.preventDefault()
        fileInputRef.current.click()

    }

    const handleFile = (e) => {
        const file = e.target.files[0]
        if (file && file.type.substr(0, 5) === 'image') {
            setImage(file)

        }
    }


    return (
        <div className='load-input '>
            {
                preview
                    ?

                    (<img src={preview} alt='' onClick={() => setImage('')} />)
                    :

                    (<button
                        className='alert alert-danger'
                        onClick={handleRef}>
                        foto
                    </button>
                    )

            }
            < input
                type='file'
                style={{ display: 'none' }}
                ref={fileInputRef}
                accept='image/*'
                onChange={handleFile}


            />


        </div>
    )
}
