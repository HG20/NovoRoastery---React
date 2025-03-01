import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">
                        produse
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">
                        numele blendului
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">
                        pret
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">
                        cantitate
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">
                        elimina
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">
                        total
                    </p>
                </div>
            </div>
        </div>
    )
}
